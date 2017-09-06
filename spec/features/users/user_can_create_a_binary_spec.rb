require 'rails_helper'

RSpec.feature "User can create a new binary" do
  context "As a logged in User" do
    attr_reader :user

    before :each do
      @user = create(:user)
    end

    it "click on upload file and be redirected to correct path" do
      allow_any_instance_of(ApplicationController).to receive(:current_user).and_return(user)

      visit user.home.url
      click_on "Upload File"

      expect(current_path).to eq("/#{user.username}/home/binary_new")
    end
  end
end
