package org.apache.jsp.WEB_002dINF.views.newClient;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class successCreate_jsp extends org.apache.jasper.runtime.HttpJspBase
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
      response.setContentType("text/html; charset=UTF-8");
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
      out.write("<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n");
      out.write("\n");
      out.write("<link href=\"");
      out.print(request.getContextPath());
      out.write("/resources/css/bootstrap.css\" rel=\"stylesheet\">\n");
      out.write("<link href=\"");
      out.print(request.getContextPath());
      out.write("/resources/css/myStyle.css\" rel=\"stylesheet\">\n");
      out.write("<script type=\"text/javascript\" src=\"/resources/js/jQuery.js\"></script>\n");
      out.write("<script type=\"text/javascript\" src=\"/resources/js/bootstrap.js\"></script>\n");
      out.write("<html>\n");
      out.write("<head>\n");
      out.write("    <title>invalidUser</title>\n");
      out.write("    <script>\n");
      out.write("        var p = 0;\n");
      out.write("        $(function () {\n");
      out.write("            run();\n");
      out.write("        });\n");
      out.write("        function run() {\n");
      out.write("            p += 5;\n");
      out.write("            $(\"div[class=bar]\").css(\"width\", p + \"%\");\n");
      out.write("            if (p < 100) {\n");
      out.write("                setTimeout(\"run()\", 20);\n");
      out.write("            }\n");
      out.write("            else {\n");
      out.write("                setTimeout(\"document.location.href='/home'\", 1000);\n");
      out.write("            }\n");
      out.write("        }\n");
      out.write("    </script>\n");
      out.write("</head>\n");
      out.write("<body class=\"allBackground\">\n");
      out.write("<div class=\"greenBorder\">\n");
      out.write("    <h1>账号申请成功！</h1>\n");
      out.write("\n");
      out.write("    <div class=\"progress progress-striped active\">\n");
      out.write("        <div class=\"bar\" style=\"width: 0%;\"></div>\n");
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
