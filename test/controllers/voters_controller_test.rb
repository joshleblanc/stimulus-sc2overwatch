require 'test_helper'

class VotersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @voter = voters(:one)
  end

  test "should get index" do
    get voters_url
    assert_response :success
  end

  test "should get new" do
    get new_voter_url
    assert_response :success
  end

  test "should create voter" do
    assert_difference('Voter.count') do
      post voters_url, params: { voter: { game_player_id: @voter.game_player_id, ip: @voter.ip } }
    end

    assert_redirected_to voter_url(Voter.last)
  end

  test "should show voter" do
    get voter_url(@voter)
    assert_response :success
  end

  test "should get edit" do
    get edit_voter_url(@voter)
    assert_response :success
  end

  test "should update voter" do
    patch voter_url(@voter), params: { voter: { game_player_id: @voter.game_player_id, ip: @voter.ip } }
    assert_redirected_to voter_url(@voter)
  end

  test "should destroy voter" do
    assert_difference('Voter.count', -1) do
      delete voter_url(@voter)
    end

    assert_redirected_to voters_url
  end
end
