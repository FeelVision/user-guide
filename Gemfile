source "https://rubygems.org"

gem "jekyll", "~> 4.3"
gem "jekyll-seo-tag", "~> 2.8"
gem "jekyll-sitemap", "~> 1.4"
gem "jekyll-toc", "~> 0.18"

group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
end

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: %i[ jruby mingw mswin x64_mingw ]

# Performance booster for watching directories on Windows
gem "wdm", "~> 0.1", platforms: %i[ mingw x64_mingw ]

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds since newer versions of the gem
# do not have a Java counterpart.
gem "http_parser.rb", "~> 0.6.0", platforms: %i[ jruby ]
