from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Test
from .serializers import TestSerializer

# from .serializers import TestSerializer


@api_view(["GET"])
def get_good_food(request):
    if request.method == "OPTIONS":
        return Response(status=200)

    test = Test.objects.all()
    serializer = TestSerializer(test, many=True)
    # Return a response to React
    return Response(serializer.data)


# Create your views here.
@api_view(["POST", "OPTIONS"])
def get_diet_plan(request):
    if request.method == "OPTIONS":
        return Response(status=200)

    data = request.data
    user_rda = data.get("rda")

    # Perform your calculations or business logic here
    diet_plan = {
        "message": f"Received RDA: {user_rda}",
        "plan": ["apple", "banana", "broccoli"],
    }

    # Return a response to React
    return Response(diet_plan)


@api_view(["POST"])
def set_name(request):
    print("received setname request")
    # Perform your calculations or business logic here
    data = request.data
    user_name = data.get("user")

    # Return a response to React
    return Response(user_name)
