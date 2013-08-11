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
      out.write("\n");
      out.write("<html>\n");
      out.write("<head>\n");
      out.write("    <title></title>\n");
      out.write("    <script type=\"text/javascript\" src=\"http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js\"></script>\n");
      out.write("    <script type=\"text/javascript\" src=\"/resources/js/bootstrap.js\"></script>\n");
      out.write("    <script type=\"text/javascript\" src=\"/resources/js/bootstrap.min.js\"></script>\n");
      out.write("</head>\n");
      out.write("<body>\n");
      out.write("\n");
      out.write("<div id=\"myCarousel\" class=\"carousel slide\">\n");
      out.write("    <ol class=\"carousel-indicators\">\n");
      out.write("        <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n");
      out.write("        <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n");
      out.write("        <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n");
      out.write("    </ol>\n");
      out.write("    <!-- Carousel items -->\n");
      out.write("    <div class=\"carousel-inner\">\n");
      out.write("        <div class=\"active item\">…</div>\n");
      out.write("        <div class=\"item\">…</div>\n");
      out.write("        <div class=\"item\">…</div>\n");
      out.write("    </div>\n");
      out.write("    <!-- Carousel nav -->\n");
      out.write("    <a class=\"carousel-control left\" href=\"#myCarousel\" data-slide=\"prev\">&lsaquo;</a>\n");
      out.write("    <a class=\"carousel-control right\" href=\"#myCarousel\" data-slide=\"next\">&rsaquo;</a>\n");
      out.write("</div>\n");
      out.write("\n");
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
