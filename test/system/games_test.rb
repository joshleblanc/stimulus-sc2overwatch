require "application_system_test_case"

class GamesTest < ApplicationSystemTestCase
  setup do
    @game = games(:one)
  end

  test "visiting the index" do
    visit games_url
    assert_selector "h1", text: "Games"
  end

  test "creating a Game" do
    visit games_url
    click_on "New Game"

    fill_in "Date", with: @game.date
    fill_in "Format", with: @game.format
    fill_in "Game type", with: @game.game_type
    fill_in "Map", with: @game.map
    fill_in "Map image", with: @game.map_image
    fill_in "Replay version", with: @game.replay_version
    fill_in "Season", with: @game.season_id
    fill_in "Url", with: @game.url
    click_on "Create Game"

    assert_text "Game was successfully created"
    click_on "Back"
  end

  test "updating a Game" do
    visit games_url
    click_on "Edit", match: :first

    fill_in "Date", with: @game.date
    fill_in "Format", with: @game.format
    fill_in "Game type", with: @game.game_type
    fill_in "Map", with: @game.map
    fill_in "Map image", with: @game.map_image
    fill_in "Replay version", with: @game.replay_version
    fill_in "Season", with: @game.season_id
    fill_in "Url", with: @game.url
    click_on "Update Game"

    assert_text "Game was successfully updated"
    click_on "Back"
  end

  test "destroying a Game" do
    visit games_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Game was successfully destroyed"
  end
end
