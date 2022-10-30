from django.contrib import admin
from .models import *

# Register your models here.

class UserAdmin(admin.ModelAdmin):
    list_display = ('username','email')
    fieldsets = (
        (None, {
            "fields": (
                ('username'), ('first_name', 'last_name'), ('email'), ('is_superuser','is_staff')
            ),
        }),
    )
    

admin.site.register(User, UserAdmin)
admin.site.register(Events)
admin.site.register(Orders)


