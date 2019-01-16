require 'test_helper'

class ReplayControllerTest < ActionDispatch::IntegrationTest
  test "should get upload" do
    get replay_upload_url
    assert_response :success
  end

end
