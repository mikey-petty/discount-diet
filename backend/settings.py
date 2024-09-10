import django_heroku
django_heroku.settings(locals())

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql",
        "NAME": "diet_logs",
        "USER": "postgres",
        "PASSWORD": "jpg6KKljjp3s6Al",
        "HOST": "discount-diet-postgres.fly.dev",  # or cloud host address
        "PORT": "5432",  # default port for Postgres
        "OPTIONS": {
            "sslmode": "require",  # Add SSL if required
        },
    }
}

INSTALLED_APPS = [
    # Other apps
    "rest_framework",
    "corsheaders",
]

MIDDLEWARE = [
    "corsheaders.middleware.CorsMiddleware",
    # 'django.middleware.common.CommonMiddleware',
]

ROOT_URLCONF = 'backend.urls'
