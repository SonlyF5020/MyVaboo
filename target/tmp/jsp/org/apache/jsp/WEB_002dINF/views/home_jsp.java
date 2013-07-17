package org.apache.jsp.WEB_002dINF.views;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class home_jsp extends org.apache.jasper.runtime.HttpJspBase
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
      response.setContentType("text/html; charset=GB2312");
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
      out.write("\n");
      out.write("<html>\n");
      out.write("<head>\n");
      out.write("    <title class=\"title\">My Weibo</title>\n");
      out.write("    <script type=\"text/javascript\" src=\"http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js\"></script>\n");
      out.write("    <link href=\"");
      out.print(request.getContextPath());
      out.write("/resources/css/myStyle.css\" rel=\"stylesheet\">\n");
      out.write("    <link href=\"");
      out.print(request.getContextPath());
      out.write("/resources/css/bootstrap.css\" rel=\"stylesheet\">\n");
      out.write("\n");
      out.write("    <script>\n");
      out.write("        var i = 0;\n");
      out.write("        var j = 0;\n");
      out.write("        $(document).ready(function(){\n");
      out.write("            $('#confirm').bind(\"click\",function(){\n");
      out.write("                var year = new Date().getYear().toString();\n");
      out.write("                var month = (new Date().getMonth()+1).toString();\n");
      out.write("                var date = new Date().getDate().toString();\n");
      out.write("                var dateString = \"<br>\"+\"               ---\"+year+\"year \"+month+\"month \"+date+\"day\";\n");
      out.write("                var deleteButton = $(document.createElement('div')).addClass('deleteButton');\n");
      out.write("                var chart = $(document.createElement('div')).attr('id', i++).attr('class', 'oneContent').html($('#weibo').val()+dateString).append(deleteButton);\n");
      out.write("                $('#weiboContent').prepend(chart);\n");
      out.write("                $('#weibo').val(\"\");\n");
      out.write("            });\n");
      out.write("\n");
      out.write("            $('#cancel').bind(\"click\",function(){\n");
      out.write("                $('#'+j).hide();\n");
      out.write("                j++;\n");
      out.write("            });\n");
      out.write("\n");
      out.write("            $('.oneContent').live('mouseover',function(){\n");
      out.write("                $(this).addClass('mouseOver');\n");
      out.write("                $('.deleteButton',this).show();\n");
      out.write("            });\n");
      out.write("\n");
      out.write("            $('.oneContent').live('mouseout',function(){\n");
      out.write("                $('.oneContent').removeClass('mouseOver');\n");
      out.write("                $('.deleteButton').hide();\n");
      out.write("            });\n");
      out.write("\n");
      out.write("            $('.deleteButton').live('click',function(){\n");
      out.write("                $(this).parent().hide();\n");
      out.write("            });\n");
      out.write("        });\n");
      out.write("    </script>\n");
      out.write("\n");
      out.write("</head>\n");
      out.write("\n");
      out.write("<body class=\"basicBody\">\n");
      out.write("<div class=\"body\">\n");
      out.write("<h1 class=\"centerText\"><img src=\"/resources/img/weibo-icon.png\" class=\"logo\">&nbspVaboo</h1>\n");
      out.write("<hr>\n");
      out.write("    <div id=\"weiboContent\" class=\"weiboContent\"></div>\n");
      out.write("<hr>\n");
      out.write("\n");
      out.write("    <div id=\"editContent\" class=\"editContent\">\n");
      out.write("\n");
      out.write("        <div class=\"leftArea\">\n");
      out.write("        <textarea type = \"text\" id=\"weibo\" Value=\"Say something?\" class=\"weibo\"></textarea>\n");
      out.write("        </div>\n");
      out.write("\n");
      out.write("        <div class=\"rightArea\">\n");
      out.write("        <button id = \"confirm\" class=\"btn\">confirm</button>\n");
      out.write("        <button id = \"cancel\" class=\"btn\">delete</button>\n");
      out.write("        </div>\n");
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
