from django.shortcuts import render
from django.http import JsonResponse
from .serializer import tweetDetailsSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view
import json
import tweepy
import json
from collections import Counter

auth = tweepy.OAuthHandler('crvrNUaSazdwTLYOgO0HsKPVs',
                           'BwoGAXIzBiAXOUn5ifloGLdOzvW9C4vLuVrp99cono9pcMsnqw')
auth.set_access_token(
    '1140640717649391616-EIhi0uAZta9BmTQZ38rStKnUrxIReD',
    'sANza4I0KlC59ZSANOfsfvRZi0xTBMLlOkCoSAZbqx7ow')

api = tweepy.API(auth)


def index(request):
    return render(request, 'frontend/index.html')


@api_view(['GET'])
def search(request):
    query = request.GET.get('inputValue', '')
    public_tweets = api.search(q=query, count=100)
    hashmap = {}
    result_hashtags = []
    result_tweets = []
    for tweet in public_tweets:
        # return top 10 hashtags in the result

        fil = list(filter(lambda x: len(x) > 0, tweet.entities['hashtags']))

        [result_hashtags.append(tweetData['text'].encode('utf-8'))
         for tweetData in fil]

        result_tweets.append({
            'username': tweet.user.name,
            'tweet': tweet.text,
            'favorite_count': tweet.favorite_count,
            'retweet_count': tweet.retweet_count
        })

    # count every word how many times appears
    for w in result_hashtags:
        hashmap[w] = hashmap.get(w, 0) + 1

    k = Counter(hashmap)

    # extract the 10 hashtags most used
    high = k.most_common(10)
    return Response({'hashtags': high, 'tweets': result_tweets})
