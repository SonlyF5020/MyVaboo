package org.apache.jsp.WEB_002dINF.views.newClient;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class newClient_jsp extends org.apache.jasper.runtime.HttpJspBase
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
    ServletContext application = null;
    ServletConfig config = null;
    JspWriter out = null;
    Object page = this;
    JspWriter _jspx_out = null;
    PageContext _jspx_page_context = null;

    try {
      response.setContentType("text/html; charset=UTF-8");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, false, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      out = pageContext.getOut();
      _jspx_out = out;
      _jspx_resourceInjector = (org.glassfish.jsp.api.ResourceInjector) application.getAttribute("com.sun.appserv.jsp.resource.injector");

      out.write("\n");
      out.write("\n");
      out.write("<link href=\"");
      out.print(request.getContextPath());
      out.write("/resources/css/bootstrap.css\" rel=\"stylesheet\">\n");
      out.write("<link href=\"");
      out.print(request.getContextPath());
      out.write("/resources/css/myStyle.css\" rel=\"stylesheet\">\n");
      out.write("\n");
      out.write("\n");
      out.write("<html>\n");
      out.write("<head>\n");
      out.write("    <title>welcome</title>\n");
      out.write("    <script type=\"text/javascript\" src=\"http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js\"></script>\n");
      out.write("    <script>\n");
      out.write("        $(document).ready(function(){\n");
      out.write("            $('#confirmShow').live(\"click\",function(){\n");
      out.write("                if($('#password1').val() == $('#password2').val()){\n");
      out.write("                    $(\".hiddenForm>[name='name']\").val($('#inputName').val());\n");
      out.write("                    $(\".hiddenForm>[name='password']\").val($('#password1').val());\n");
      out.write("                    $(\"#confirmHidden\").click();\n");
      out.write("                }\n");
      out.write("                else{\n");
      out.write("                    $(\".warning\").show();\n");
      out.write("                }\n");
      out.write("            });\n");
      out.write("        });\n");
      out.write("    </script>\n");
      out.write("</head>\n");
      out.write("\n");
      out.write("<body class=\"allBackground\">\n");
      out.write("<div class=\"login\">\n");
      out.write("    <div class=\"clientForm\">\n");
      out.write("        <form>\n");
      out.write("            姓名：<input type=\"text\" id=\"inputName\"><br>\n");
      out.write("            密码：<input type=\"password\" id=\"password1\"><br>\n");
      out.write("            密码：<input type=\"password\" id=\"password2\"><br>\n");
      out.write("            <span class=\"warning\">您两次输入的密码不一致！</span><br>\n");
      out.write("            <input type=\"button\" class=\"btn\" id=\"confirmShow\" value=\"确定\"><a href=\"/\" class=\"btn\">返回</a>\n");
      out.write("        </form>\n");
      out.write("\n");
      out.write("        <form action=\"/clientCreate\" method=\"get\" class=\"hiddenForm\">\n");
      out.write("            <input type=\"text\" name=\"name\"><input type=\"password\" name=\"password\"><input type=\"submit\" id=\"confirmHidden\">\n");
      out.write("        </form>\n");
      out.write("\n");
      out.write("    </div>\n");
      out.write("    <div class=\"bigLogo\">\n");
      out.write("        <img src=\"/resources/img/zergIcon.png\">\n");
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
