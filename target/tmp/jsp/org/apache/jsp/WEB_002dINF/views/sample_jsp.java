package org.apache.jsp.WEB_002dINF.views;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class sample_jsp extends org.apache.jasper.runtime.HttpJspBase
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
      out.write("    <script type=\"text/javascript\" src=\"/resources/js/jQuery.js\"></script>\n");
      out.write("    <link href=\"/resources/css/sample.css\" rel=\"stylesheet\">\n");
      out.write("</head>\n");
      out.write("<body>\n");
      out.write("<script>\n");
      out.write("    $(document).ready(function(){\n");
      out.write("        var x= '<div class=\"dialog-titlebar\">'+\n");
      out.write("                '<span class=\"webengage-tlogo\"></span>'+\n");
      out.write("                '<span class=\"webengage-caption\">Telstra 24x7 Chat</span>'+\n");
      out.write("                '<span title=\"close\" class=\"webengage-close\"></span>'+\n");
      out.write("                '</div>'+\n");
      out.write("                '<div class=\"dialog-content\">'+\n");
      out.write("                '<div class=\"webengage-banner\"></div>'+\n");
      out.write("                '</div>'+\n");
      out.write("                '<div class=\"dialog-buttonpane\">'+\n");
      out.write("                '<div class=\"dialog-buttonset\"></div>'+\n");
      out.write("                '</div>';\n");
      out.write("        $('body').append(x);\n");
      out.write("    });\n");
      out.write("</script>\n");
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
