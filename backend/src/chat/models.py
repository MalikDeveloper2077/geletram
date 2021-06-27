from django.db import models

from profiles.models import Profile


class Chat(models.Model):
    participants = models.ManyToManyField(Profile, related_name='chats')

    def __str__(self):
        return ' - '.join([
            profile.user.username for profile in \
            self.participants.select_related('user')
        ])


class Message(models.Model):
    chat = models.ForeignKey(Chat, on_delete=models.CASCADE, related_name='messages')
    sender = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='messages')
    text = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.sender} - {self.timestamp[:20]}'

    class Meta:
        ordering = ['-timestamp']
