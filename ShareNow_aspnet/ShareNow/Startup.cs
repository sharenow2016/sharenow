using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(ShareNow.Startup))]
namespace ShareNow
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
