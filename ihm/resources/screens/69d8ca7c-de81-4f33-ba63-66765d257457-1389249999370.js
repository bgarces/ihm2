jQuery("#simulation")
  .on("click", ".s-69d8ca7c-de81-4f33-ba63-66765d257457 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-69d8ca7c-de81-4f33-ba63-66765d257457 #s-Button_1": {
                      "attributes": {
                        "background-color": "#5CC4EA",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-69d8ca7c-de81-4f33-ba63-66765d257457 #s-Button_1": {
                      "attributes-ie": {
                        "-pie-background": "#5CC4EA",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 200
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-69d8ca7c-de81-4f33-ba63-66765d257457 #s-Button_1": {
                      "attributes": {
                        "background-color": "#DFE0DF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-69d8ca7c-de81-4f33-ba63-66765d257457 #s-Button_1": {
                      "attributes-ie": {
                        "-pie-background": "#DFE0DF",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/5fa88908-9eec-454f-a899-14fca80f6533"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });