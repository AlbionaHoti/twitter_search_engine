from rest_framework import serializers


class tweetDetailsSerializer(serializers.Serializer):
    """Your data serializer, define your fields here."""

    username = serializers.CharField(max_length=255)
    tweet = serializers.CharField(max_length=355)
    favorite_count = serializers.IntegerField()
    retweet_count = serializers.IntegerField()


# class TweetDetails:
#     def __init__(self, username, tweet, favorite_count, retweet_count):
#         self.username = username
#         self.tweet = tweet
#         self.favorite_count = favorite_count
#         self.retweet_count = retweet_count
