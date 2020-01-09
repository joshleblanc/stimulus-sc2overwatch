require 'test_helper'

class PlayersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @player = players(:one)
  end

  test "should get index" do
    get players_url
    assert_response :success
  end

  test "should search players" do
    get players_url, params: { q: @player.name }
    assert_response :success
  end
end
