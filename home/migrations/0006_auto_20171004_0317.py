# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-10-04 03:17
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0005_auto_20171004_0313'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pagesection',
            name='sub_heading',
            field=models.CharField(blank=True, max_length=250),
        ),
    ]
