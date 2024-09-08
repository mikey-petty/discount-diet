DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'diet_logs',
        'USER': 'postgres',
        'PASSWORD': 'c73eg2n^MYU!hNg#yWJT',
        'HOST': 'localhost',  # or cloud host address
        'PORT': '5432',  # default port for Postgres
    }
}

CORS_ALLOW_ALL_ORIGINS = True

INSTALLED_APPS = [
    # Other apps
    'rest_framework',    
    'corsheaders',
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',      
    # 'django.middleware.common.CommonMiddleware',
]