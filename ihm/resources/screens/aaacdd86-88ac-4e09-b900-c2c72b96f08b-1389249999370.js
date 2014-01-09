jQuery("#simulation")
  .on("click", ".s-aaacdd86-88ac-4e09-b900-c2c72b96f08b .click", function(event, data) {
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
                    "#s-aaacdd86-88ac-4e09-b900-c2c72b96f08b #s-Button_1": {
                      "attributes": {
                        "background-color": "#5CC4EA",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-aaacdd86-88ac-4e09-b900-c2c72b96f08b #s-Button_1": {
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
                    "#s-aaacdd86-88ac-4e09-b900-c2c72b96f08b #s-Button_1": {
                      "attributes": {
                        "background-color": "#DFE0DF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-aaacdd86-88ac-4e09-b900-c2c72b96f08b #s-Button_1": {
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-aaacdd86-88ac-4e09-b900-c2c72b96f08b #s-Button_2": {
                      "attributes": {
                        "background-color": "#5CC4EA",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-aaacdd86-88ac-4e09-b900-c2c72b96f08b #s-Button_2": {
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
                    "#s-aaacdd86-88ac-4e09-b900-c2c72b96f08b #s-Button_2": {
                      "attributes": {
                        "background-color": "#DFE0DF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-aaacdd86-88ac-4e09-b900-c2c72b96f08b #s-Button_2": {
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-aaacdd86-88ac-4e09-b900-c2c72b96f08b #s-Button_3": {
                      "attributes": {
                        "background-color": "#5CC4EA",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-aaacdd86-88ac-4e09-b900-c2c72b96f08b #s-Button_3": {
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
                    "#s-aaacdd86-88ac-4e09-b900-c2c72b96f08b #s-Button_3": {
                      "attributes": {
                        "background-color": "#DFE0DF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-aaacdd86-88ac-4e09-b900-c2c72b96f08b #s-Button_3": {
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_2")) {
      cases = [
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