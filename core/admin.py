from atexit import register
from django.contrib import admin
from .models import *

# Register your models here.
admin.site.register(Events)
admin.site.register(Orders)

class UserAdmin(admin.ModelAdmin):
    list_display = ('username','email')
    fieldsets = (
        (None, {
            "fields": (
                ('username'), ('first_name', 'last_name'), ('email'), 'is_active'
            ),
        }),
    )
    

admin.site.register(User, UserAdmin)
