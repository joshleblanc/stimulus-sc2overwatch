require "application_system_test_case"

class GamePlayersTest < ApplicationSystemTestCase
  setup do
    @game_player = game_players(:one)
  end

  test "visiting the index" do
    visit game_players_url
    assert_selector "h1", text: "Game Players"
  end

  test "creating a Game player" do
    visit game_players_url
    click_on "New Game Player"

    fill_in "Apm", with: @game_player.apm
    fill_in "Clan", with: @game_player.clan
    fill_in "Color", with: @game_player.color
    fill_in "Division", with: @game_player.division
    fill_in "Evidence", with: @game_player.evidence
    fill_in "Game", with: @game_player.game_id
    fill_in "Global rank", with: @game_player.global_rank
    fill_in "Guilty count", with: @game_player.guilty_count
    fill_in "Innocent count", with: @game_player.innocent_count
    fill_in "Is accused", with: @game_player.is_accused
    fill_in "Mmr", with: @game_player.mmr
    fill_in "Player", with: @game_player.player_id
    fill_in "Race", with: @game_player.race
    fill_in "Server rank", with: @game_player.server_rank
    fill_in "Team", with: @game_player.team
    fill_in "Winner", with: @game_player.winner
    click_on "Create Game player"

    assert_text "Game player was successfully created"
    click_on "Back"
  end

  test "updating a Game player" do
    visit game_players_url
    click_on "Edit", match: :first

    fill_in "Apm", with: @game_player.apm
    fill_in "Clan", with: @game_player.clan
    fill_in "Color", with: @game_player.color
    fill_in "Division", with: @game_player.division
    fill_in "Evidence", with: @game_player.evidence
    fill_in "Game", with: @game_player.game_id
    fill_in "Global rank", with: @game_player.global_rank
    fill_in "Guilty count", with: @game_player.guilty_count
    fill_in "Innocent count", with: @game_player.innocent_count
    fill_in "Is accused", with: @game_player.is_accused
    fill_in "Mmr", with: @game_player.mmr
    fill_in "Player", with: @game_player.player_id
    fill_in "Race", with: @game_player.race
    fill_in "Server rank", with: @game_player.server_rank
    fill_in "Team", with: @game_player.team
    fill_in "Winner", with: @game_player.winner
    click_on "Update Game player"

    assert_text "Game player was successfully updated"
    click_on "Back"
  end

  test "destroying a Game player" do
    visit game_players_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Game player was successfully destroyed"
  end
end
