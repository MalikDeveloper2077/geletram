class RESTMethod:
    """Contains special properties for handling a
    REST method like name, serializer, and permissions
    """
    def __init__(self, name, serializer, permissions):
        self.name = name
        self.serializer = serializer
        self.permissions = permissions

    def is_matching(self, action_name):
        """Return if the method is the same as the given"""
        if action_name == self.name:
            return True
        return False


def match_rest_method(all_methods: list, action_name: str):
    """Return a match method from the all_methods or None"""
    for method in all_methods:
        if method.is_matching(action_name):
            return method
