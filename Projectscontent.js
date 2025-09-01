// fetch information for projects
$.get("/projects_info.json", (data) => {
    // loop through each project's data
    data["projects"].forEach(project => {
        $('#Projectscontent').append(
            '<div style="display: flex; flex-direction: row;">' +
                '<div>' +
                    '<strong style="font-size: 12px;">' + project["header"] + '<br>' +
                        '<i style="font-size: 11px;">' + project["subheader"] + '</i></strong><br>' +
                        project["description"] + '<br>' +
                        (project["project_link"] !== "N/A" ? 
                            '<a class="projects_buttons" target="_blank" href="' + project["project_link"] + '">PROJECT LINK</a>' : 
                            '') + '<br><br>'
        );
    });
});