from rest_framework.permissions import AllowAny, IsAuthenticated, IsAdminUser
from django.shortcuts import render, get_object_or_404

from .serializers import *
from .models import *

# DRF imports
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics, viewsets, status

class UserViewSet(viewsets.ViewSet):

    # List All Users -- get method
    def list(self, request):
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)

    # Retrieve Particular User -- get method
    def retrieve(self, request, pk = None):
        queryset = User.objects.all()
        user = get_object_or_404(queryset, pk = pk)
        serializer = UserSerializer(user)
        return Response(serializer.data)

    # Create a new User -- post method
    def create(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

class AccountDetailView(APIView):
    serializer = UserSerializer
    permission_classes = [IsAuthenticated]

    def get(self, request, **kwargs):
        data = {}
        id = request.user.id
        user = User.objects.filter(id=id).first()
        # profile = User.objects.filter(user=user).first()
        # data['phone_no'] = user.phone_no
        # data['name'] = '{} {}'.format(user.first_name, user.last_name)
        data['email'] = user.email
        
        if(user.senior):
            data['level'] = 'Senior'
        else:
            data['level'] = 'Junior'

        orders = Orders.objects.filter(player_id=user.id)
        events = []
        for order in orders:
            events.append(order.event_id.event_name)
        data['events'] = events
        return Response(data, status=201)

class EventsList(generics.ListCreateAPIView):
    queryset = Events.objects.all()
    serializer_class = EventSerializer
    permission_classes = [IsAdminUser]


class EventsDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Events.objects.all()
    serializer_class = EventSerializer
    permission_classes = [AllowAny]


class OrdersList(generics.ListCreateAPIView):
    serializer_class = OrderSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        if self.request.user.is_superuser:
            return Orders.objects.all()
        else:
            return Orders.objects.filter(player_id=self.request.user.pk)

    def create(self, request, *args, **kwargs):
        if request.user.is_superuser:
            serializer = self.get_serializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response({'detail': 'You do not have permission to perform this action.'}, status=403)

class OrderDetail(APIView):
    serializer_class = OrderSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        order_id = self.kwargs['pk']
        if self.request.user.is_superuser:
            return Orders.objects.filter(pk=order_id)
        return Orders.objects.filter(pk=order_id, player_id=self.request.user.pk)

    def get(self, request, **kwargs):
        order = self.get_queryset().first()
        if order:
            context = {
                'pk': order.pk,
                'player_id': order.player_id.pk,
                'order_date': order.order_date,
                'event_name': order.event_id.event_name,
            }
            return Response(context, status=201)
        context = {
            'detail': 'No orders',
        }

        return Response(context, status=403)


class PlaceOrder(APIView):
    serializer_class = OrderSerializer
    permission_classes = [IsAuthenticated]

    def post(self, request):

        event_id = request.data['event_id'] 
        event = Events.objects.get(pk=event_id)
        prev_order = Orders.objects.filter(player_id=request.user.id, event_id=event_id)
        if prev_order:
            return Response({'message': 'You have already registered!!'})  
        password = 1234
        create_order = Orders(player_id=request.user, event_id=event)
        create_order.save()
        return Response({'message': 'Order placed!!'}, status=201)
    