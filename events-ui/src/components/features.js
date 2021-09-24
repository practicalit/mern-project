/**
 * Features to be added to the mern-project (event-management)
 */
function Features() {
  let features = [
    {
      title: "Clean home console.",
      desc: `When loading the home page, there are a couple of warnings and 
      console messages appearing on the console. Please clean/fix those`,
    },
    {
      title: "Clean member console.",
      desc: `When loading the member page, there are a couple of warnings and 
      console messages appearing on the console. Please clean/fix those`,
    },
    {
      title: "Redirect to home on logo",
      desc: `When the user clicks the logo, the title on the top left side of the 
      page that says "Events Management", please redirect the use to home page. If 
      the user is already on home page, nothing happens.`,
    },
    {
      title: "Make the member page to show both first, last and email.",
      desc: `Use a table to show the list of member with additional information
      to be shown on the page. 
      Please show first, last and email of the members that are listed. You can 
      use table from bootstrap.`,
    },
    {
      title: "Make the member's first name link",
      desc: `From the table of the members you created on the above feature, 
      make the first name a link`,
    },
    {
      title: "Create router for member-detail",
      desc: `A router needs to be added for url member-detail. For this create 
      a new functional component for member detail. So when the member-detail is 
      requested, it will point to the member detail component. See how other
      component/routers are working to get the idea.`,
    },
    {
      title: "Show the full detail of member.",
      desc: `From the list of the members, when the user is cliking on the first
      name of the member, then the page to show the whole detail of the member is
      presented. See the working example of event-details and how it works.`,
    },
    {
      title: "Create event-attendees collection.",
      desc: `Create a mongodb collection for an event attendees. We want the 
      collection to hold the event and members who will be attending the event.
      We will be holding the event and attendees by their ids. So the document 
      looks like {event_id: EVENT_ID_GOES_HERE, attendees: [LIST_OF_ATTENDIES_ID]}
      . And some data manually from existing events and members for sample.`,
    },
    {
      title: "Crate API to get attendees by event.",
      desc: `First follow how we have created the API for event and members on 
      the node and create API with signature /api/events/attendees/:id - where :id 
      is the id of the event whose attendees are to be fetched. 
      This is going to be added in the events.routes.js. You may need to create 
      a model for the event-attendees though. `,
    },
    {
      title: "Finalize member registration",
      desc: `Creating a member is halfway done, please finalize it by accepting 
      the whole needed information and inserting to the database. You will check 
      both node and react as needed.`
    }
  ];
  return (
    <>
      {features &&
        features.map((feature, index) => {
          return (
            <div className="accordion" id="accordionExample" key={index}>
              <div className="accordion-item">
                <h2 className="accordion-header" id={"heading"+index}>
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={"#collapse"+index}
                    aria-expanded="false"
                    aria-controls={"collapse"+index}
                  >
                    {feature.title}
                  </button>
                </h2>
                <div
                  id={"collapse"+index}
                  className="accordion-collapse collapse"
                  aria-labelledby={"heading"+index}
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    {feature.desc}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
}

export default Features;