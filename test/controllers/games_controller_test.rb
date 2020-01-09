require 'test_helper'

class GamesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @game = games(:one)
  end

  test "should get accuse" do
    get accuse_player_url(@game.id)
    assert_response :success
  end

  test "should create game" do
    post update_game_url(@game.id), params: { player: players(:one).id, evidence: "test" }
    assert_redirected_to game_player_url(GamePlayer.find_by(player_id: players(:one)))
  end
end
