using Microsoft.AspNetCore.Mvc;

namespace RevelJsApp.Controllers
{
    public class MarkdownEditorController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
