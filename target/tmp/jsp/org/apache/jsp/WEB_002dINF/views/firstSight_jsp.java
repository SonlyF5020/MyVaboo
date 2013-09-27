package org.apache.jsp.WEB_002dINF.views;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class firstSight_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final JspFactory _jspxFactory = JspFactory.getDefaultFactory();

  private static java.util.List<String> _jspx_dependants;

  private org.glassfish.jsp.api.ResourceInjector _jspx_resourceInjector;

  public java.util.List<String> getDependants() {
    return _jspx_dependants;
  }

  public void _jspService(HttpServletRequest request, HttpServletResponse response)
        throws java.io.IOException, ServletException {

    PageContext pageContext = null;
    HttpSession session = null;
    ServletContext application = null;
    ServletConfig config = null;
    JspWriter out = null;
    Object page = this;
    JspWriter _jspx_out = null;
    PageContext _jspx_page_context = null;

    try {
      response.setContentType("text/html;charset=UTF-8");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;
      _jspx_resourceInjector = (org.glassfish.jsp.api.ResourceInjector) application.getAttribute("com.sun.appserv.jsp.resource.injector");

      out.write("\n");
      out.write("<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n");
      out.write("\n");
      out.write("<html>\n");
      out.write("<head>\n");
      out.write("    <title></title>\n");
      out.write("    <link href=\"");
      out.print(request.getContextPath());
      out.write("/resources/css/myStyle.css\" rel=\"stylesheet\">\n");
      out.write("    <link href=\"");
      out.print(request.getContextPath());
      out.write("/resources/css/bootstrap.css\" rel=\"stylesheet\">\n");
      out.write("    <link href=\"");
      out.print(request.getContextPath());
      out.write("/resources/css/bootstrap.min.css\" rel=\"stylesheet\">\n");
      out.write("    <script type=\"text/javascript\" src=\"/resources/js/jQuery.js\"></script>\n");
      out.write("    <script type=\"text/javascript\" src=\"/resources/js/bootstrap.js\"></script>\n");
      out.write("    <script type=\"text/javascript\" src=\"/resources/js/bootstrap.min.js\"></script>\n");
      out.write("</head>\n");
      out.write("<body>\n");
      out.write("<header>钟表，可以回到起点，却已不是昨天</header>\n");
      out.write("<div class=\"firstSight-body\">\n");
      out.write("    <div class=\"welcome\">\n");
      out.write("        <div id=\"myCarousel\" class=\"carousel slide\">\n");
      out.write("            <ol class=\"carousel-indicators\" style=\"position: absolute\">\n");
      out.write("                <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n");
      out.write("                <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n");
      out.write("                <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n");
      out.write("            </ol>\n");
      out.write("            <!-- Carousel items -->\n");
      out.write("            <div class=\"carousel-inner\">\n");
      out.write("\n");
      out.write("                <div class=\"active item\">\n");
      out.write("                    <img src=\"/resources/img/university/yiheyuan.jpg\">\n");
      out.write("\n");
      out.write("                    <div class=\"carousel-caption\">\n");
      out.write("                        <h4>占红来的青葱岁月</h4>\n");
      out.write("                        <ul class=\"listCustomer\">\n");
      out.write("                            <li>春湖落日水拖蓝</li>\n");
      out.write("                            <li>天影楼台上下涵</li>\n");
      out.write("                            <li>十里青山行画里</li>\n");
      out.write("                            <li>双飞百鸟似江南</li>\n");
      out.write("                        </ul>\n");
      out.write("                    </div>\n");
      out.write("                </div>\n");
      out.write("\n");
      out.write("                <div class=\"item\">\n");
      out.write("                    <img src=\"/resources/img/university/guys.jpeg\">\n");
      out.write("\n");
      out.write("                    <div class=\"carousel-caption\">\n");
      out.write("                        <h4>三剑客</h4>\n");
      out.write("\n");
      out.write("                        <p>明天你是否会想起\n");
      out.write("                            昨天你写的日记\n");
      out.write("                            明天你是否还惦记\n");
      out.write("                            曾经最爱哭的你</p>\n");
      out.write("                    </div>\n");
      out.write("                </div>\n");
      out.write("                <div class=\"item\">\n");
      out.write("                    <img src=\"/resources/img/university/friends.jpeg\">\n");
      out.write("\n");
      out.write("                    <div class=\"carousel-caption\">\n");
      out.write("                        <h4>我们都年轻</h4>\n");
      out.write("                    </div>\n");
      out.write("                </div>\n");
      out.write("            </div>\n");
      out.write("            <!-- Carousel nav -->\n");
      out.write("            <a class=\"carousel-control left\" href=\"#myCarousel\" data-slide=\"prev\">&lsaquo;</a>\n");
      out.write("            <a class=\"carousel-control right\" href=\"#myCarousel\" data-slide=\"next\">&rsaquo;</a>\n");
      out.write("        </div>\n");
      out.write("    </div>\n");
      out.write("    <div class=\"loginLink\">\n");
      out.write("        <div class=\"loginLink-login\"><a href=\"/login\">登录</a></div>\n");
      out.write("        <div class=\"loginLink-login\"><a href=\"/register\">注册</a></div>\n");
      out.write("    </div>\n");
      out.write("</div>\n");
      out.write("</body>\n");
      out.write("</html>");
    } catch (Throwable t) {
      if (!(t instanceof SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          out.clearBuffer();
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
        else throw new ServletException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }
}
