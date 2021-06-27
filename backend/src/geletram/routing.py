from channels.auth import AuthMiddlewareStack
from channels.routing import ProtocolTypeRouter, URLRouter
from chat.routing import websocket_urlpatterns as chat_patterns


application = ProtocolTypeRouter({
    'websocket': AuthMiddlewareStack(
        URLRouter(chat_patterns)
    ),
})
