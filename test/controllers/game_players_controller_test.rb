require 'test_helper'

class GamePlayersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @game_player = game_players(:one)
  end

  test "should get index" do
    get game_players_url
    assert_response :success
  end

  test "should get new" do
    get new_game_player_url
    assert_response :success
  end

  test "should create game_player" do
    assert_difference('GamePlayer.count') do
      post game_players_url, params: { game_player: { apm: @game_player.apm, clan: @game_player.clan, color: @game_player.color, division: @game_player.division, evidence: @game_player.evidence, game_id: @game_player.game_id, global_rank: @game_player.global_rank, guilty_count: @game_player.guilty_count, innocent_count: @game_player.innocent_count, is_accused: @game_player.is_accused, mmr: @game_player.mmr, player_id: @game_player.player_id, race: @game_player.race, server_rank: @game_player.server_rank, team: @game_player.team, winner: @game_player.winner } }
    end

    assert_redirected_to game_player_url(GamePlayer.last)
  end

  test "should show game_player" do
    get game_player_url(@game_player)
    assert_response :success
  end

  test "should get edit" do
    get edit_game_player_url(@game_player)
    assert_response :success
  end

  test "should update game_player" do
    patch game_player_url(@game_player), params: { game_player: { apm: @game_player.apm, clan: @game_player.clan, color: @game_player.color, division: @game_player.division, evidence: @game_player.evidence, game_id: @game_player.game_id, global_rank: @game_player.global_rank, guilty_count: @game_player.guilty_count, innocent_count: @game_player.innocent_count, is_accused: @game_player.is_accused, mmr: @game_player.mmr, player_id: @game_player.player_id, race: @game_player.race, server_rank: @game_player.server_rank, team: @game_player.team, winner: @game_player.winner } }
    assert_redirected_to game_player_url(@game_player)
  end

  test "should destroy game_player" do
    assert_difference('GamePlayer.count', -1) do
      delete game_player_url(@game_player)
    end

    assert_redirected_to game_players_url
  end
end
