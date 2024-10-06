from django.core.management.base import BaseCommand
from searchapp.models import Country

class Command(BaseCommand):
    help = 'Populates the database with a list of countries'

    def handle(self, *args, **kwargs):
        countries = [
            'Albania', 'Andorra', 'Australia', 'Brazil', 'Belgium', 'Canada',
            'China', 'France', 'Germany', 'India', 'Indonesia', 'Ireland', 'Italy',
            'Japan', 'Kenya', 'Luxembourg', 'Mexico', 'New Zealand', 'Nigeria',
            'Portugal', 'Russia', 'South Africa', 'South Korea', 'Spain', 'Sweden',
            'Thailand', 'Ukraine', 'United Kingdom', 'United States of America',
            'Vietnam', 'Zambia'
        ]

        for country in countries:
            Country.objects.get_or_create(name=country)

        self.stdout.write(self.style.SUCCESS('Successfully populated countries'))
