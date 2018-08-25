var menuIsOpen = 0;

function menuClick()
{
	if(menuIsOpen == 0)
    {
        document.getElementById('menuDropDown').style.display = 'flex';
        menuIsOpen = 1;
    }
    else if(menuIsOpen == 1)
    {
        document.getElementById('menuDropDown').style.display = 'none';
        menuIsOpen = 0;
    }
}
