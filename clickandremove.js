window.onload = function()
{

    // Our CSS
    const CSS_TEXT = ".dashboard-sidebar::-webkit-scrollbar { display:none !important } /* Remove Scrollbar Visually */";

    // Get the buttons on the page
    const buttons = document.getElementsByTagName('button');

    // Loop all buttons
    for (var i = 0; i < buttons.length; i++)
    {

        // Check for "Show more" - This is terrible but does the job I guess.
        if (buttons[i].textContent.includes("Show more"))
        {

            // We found the button so click it!
            buttons[i].click();

            // Make CSS to hide scrollbar
            const css = document.createElement("style");
            css.setAttribute('type', 'text/css');

            if ("textContent" in css)
            {

                css.textContent = CSS_TEXT;

            }
            else
            {

                css.innerText = CSS_TEXT;

            }

            // Apply the CSS to the page
            document.body.appendChild(css);
            break;

        }

    }

}