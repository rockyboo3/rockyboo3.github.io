// fetch information for experiences
$.get("https://rockyboo3.github.io/portfolio/experiences_info.json", (data) => {
    // loop through each experience's data
    data["experiences"].forEach(experience => {
        $('#Experiencecontent').append(
            '<div style="display: flex; flex-direction: row;">' +
                '<img class="popup_icon" style="padding-top: 0px;" src="images/' + experience["img"] + '_icon.png"/>' + 
                '<div>' +
                    '<strong style="font-size: 12px;">' + experience["header"] + '<br>' +
                        '<i style="font-size: 11px;">' + experience["subheader"] + '</i></strong><br>' +
                        experience["description"] + '<br>' +
                        '- <strong>' + experience["skills"] + '</strong><br><br>'
        );
    });
});