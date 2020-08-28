def attribute_error_handler(value_to_return):
    """Decorator for catching AttributeErrors.

    Returns:
        [Func result | value_to_return] (any): If the func raise AttributeError,
        value_to_return will be returned, else result of the func

    """
    def inner(func):
        def wrapper(*args, **kwargs):
            try:
                return func(*args, **kwargs)
            except AttributeError:
                return value_to_return
        return wrapper
    return inner
