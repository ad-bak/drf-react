from django.contrib import admin
from .models import Channel, Server, Category


class CategoryAdmin(admin.ModelAdmin):
    list_display = ("name", "description")


admin.site.register(Channel)
admin.site.register(Server)
admin.site.register(Category, CategoryAdmin)
