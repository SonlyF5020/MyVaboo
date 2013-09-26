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
      out.write("\n");
      out.write("\n");
      out.write("<html>\n");
      out.write("<head>\n");
      out.write("    <title>welcome</title>\n");
      out.write("    <script type=\"text/javascript\" src=\"/resources/js/jQuery.js\"></script>\n");
      out.write("    <script type=\"text/javascript\" src=\"/resources/js/bootstrap.js\"></script>\n");
      out.write("\n");
      out.write("    <script>\n");
      out.write("        $(document).ready(function(){\n");
      out.write("            $('#confirmShow').bind(\"click\",function(){\n");
      out.write("                if($('#password1').val() == $('#password2').val()){\n");
      out.write("                    $(\".hiddenForm>[name='name']\").val($('#inputName').val());\n");
      out.write("                    $(\".hiddenForm>[name='password']\").val($('#password1').val());\n");
      out.write("                    $(\".hiddenForm>[name='emailAddress']\").val($('#emailAddress').val());\n");
      out.write("                    $(\"#confirmHidden\").click();\n");
      out.write("                }\n");
      out.write("                else{\n");
      out.write("                    $(\".warning\").show();\n");
      out.write("                }\n");
      out.write("            });\n");
      out.write("            var index = 1;\n");
      out.write("            while(index<21){\n");
      out.write("                var faceUrl = '/resources/img/Face-Icons/Males/'+index+'.png';\n");
      out.write("                var newFace = $(\"<img>\").attr(\"src\",faceUrl);\n");
      out.write("                var faceDiv = $(\"<div class='oneFace'><div>\").append(newFace);\n");
      out.write("                $('#facesContainer').append(faceDiv);\n");
      out.write("                index++;\n");
      out.write("            }\n");
      out.write("\n");
      out.write("            $('#faceChosen').on(\"click\",\"div.oneFace\",function(){\n");
      out.write("                var src = $('img',this).attr(\"src\");\n");
      out.write("                $('.hiddenForm input[name=\"faceUrl\"]').val(src);\n");
      out.write("                $('#faceChosen').modal('hide');\n");
      out.write("                $('.login .bigLogo img').attr(\"src\",src);\n");
      out.write("            })\n");
      out.write("\n");
      out.write("\n");
      out.write("            $('.bigLogo a').bind(\"click\",function(){\n");
      out.write("                $('#faceChosen').modal();\n");
      out.write("            });\n");
      out.write("        });\n");
      out.write("    </script>\n");
      out.write("</head>\n");
      out.write("\n");
      out.write("<body class=\"allBackground\">\n");
      out.write("<div class=\"login\">\n");
      out.write("    <div class=\"clientForm\">\n");
      out.write("        <form id=\"registerForm\">\n");
      out.write("            姓名：<input type=\"text\" id=\"inputName\" required><br>\n");
      out.write("            密码：<input type=\"password\" id=\"password1\" minlength=6 required><br>\n");
      out.write("            密码：<input type=\"password\" id=\"password2\"><br>\n");
      out.write("            邮箱：<input type=\"email\" id=\"emailAddress\" required>\n");
      out.write("            <span class=\"warning\"><br>您两次输入的密码不一致！</span><br>\n");
      out.write("            <input type=\"button\" class=\"btn\" id=\"confirmShow\" value=\"确定\"><a href=\"/logout\" class=\"btn\">返回</a>\n");
      out.write("        </form>\n");
      out.write("\n");
      out.write("        <form action=\"/clientCreate\" method=\"get\" class=\"hiddenForm\">\n");
      out.write("            <input type=\"text\" name=\"name\">\n");
      out.write("            <input type=\"password\" name=\"password\">\n");
      out.write("            <input type=\"text\" name=\"faceUrl\">\n");
      out.write("            <input type=\"text\" name=\"emailAddress\">\n");
      out.write("            <input type=\"submit\" id=\"confirmHidden\">\n");
      out.write("        </form>\n");
      out.write("    </div>\n");
      out.write("    <div class=\"bigLogo\">\n");
      out.write("        <img src=\"/resources/img/zergIcon.png\">\n");
      out.write("        <a class=\"btn\">选择头像</a>\n");
      out.write("    </div>\n");
      out.write("    ");
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "/WEB-INF/views/modal/facesLightbox.jsp", out, false);
      out.write("\n");
      out.write("    <script src=\"/resources/js/jquery.validate.js\"></script>\n");
      out.write("    <script>\n");
      out.write("        $('#registerForm').validate();\n");
      out.write("    </script>\n");
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
