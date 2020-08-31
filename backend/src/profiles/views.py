from django.contrib.auth import get_user_model
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.viewsets import ModelViewSet

from .serializers import UserSerializer, UserCreateSerializer
from .services.rest_methods import RESTMethod, match_rest_method
from .services.utils import attribute_error_handler


User = get_user_model()


class UserViewSet(ModelViewSet):
    queryset = User.objects.all()
    rest_methods = [
        RESTMethod(
            name='create',
            serializer=UserCreateSerializer,
            permissions=(AllowAny,)
        )
    ]

    @attribute_error_handler([IsAuthenticated()])
    def get_permissions(self):
        """If there's no a match method, .permissions will raise
        AttributeError, then the decorator attribute will be returned
        """
        permissions = match_rest_method(self.rest_methods, self.action).permissions
        return [permission() for permission in permissions]

    @attribute_error_handler(UserSerializer)
    def get_serializer_class(self):
        return match_rest_method(self.rest_methods, self.action).serializer
