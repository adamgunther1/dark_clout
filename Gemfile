source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end


gem 'awesome_print'
gem 'rails', '~> 5.0.2'
gem 'pg', '~> 0.18'
gem 'puma', '~> 3.0'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
gem 'coffee-rails', '~> 4.2'
gem 'materialize-sass'
gem 'autoprefixer-rails'
gem 'jquery-rails'
gem 'jquery-turbolinks'
gem 'material_icons'
gem 'turbolinks'
gem 'jbuilder', '~> 2.5'
gem 'active_model_serializers'
gem 'figaro'
gem 'aws-sdk', '~> 2'
gem 'aws-sdk-rails'
gem 'omniauth-facebook'
gem 'twilio-ruby'
gem 'bcrypt'
gem 'database_cleaner'
gem 'will_paginate'
gem 'faker', :git => 'git://github.com/stympy/faker.git', :branch => 'master'
gem 'exifr'
gem 'json'
gem 'redis'
gem 'sidekiq'
gem 'nouislider-rails'
gem 'rack-cors', :require => 'rack/cors'
gem 'gon'
gem 'yomu'
gem 'engtagger'
gem 'sprockets-rails', '2.3.3'


group :development, :test do
  gem 'byebug', platform: :mri
  gem 'pry-nav'
  gem 'pry-stack_explorer'
end

group :development do
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '~> 3.0.5'
end

group :test do
  gem 'capybara'
  gem 'rspec-rails'
  gem 'launchy'
  gem 'factory_girl_rails'
  gem 'shoulda-matchers', '~> 3.1'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
