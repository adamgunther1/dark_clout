class Binary < ApplicationRecord
  validates :name, presence: true
  validates :extension, presence: true
  validates :data_url, presence: true

  belongs_to :folder
  has_many :comments

  def url
    folder.url + '/' + name + '.' + extension
  end
end
