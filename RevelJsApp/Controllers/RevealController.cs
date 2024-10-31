using Microsoft.AspNetCore.Mvc;

namespace RevelJsApp.Controllers
{
    public class RevealController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
