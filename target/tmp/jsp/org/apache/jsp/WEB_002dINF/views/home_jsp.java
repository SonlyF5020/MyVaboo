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
      out.write("    <script type=\"text/javascript\" src=\"/resources/js/bootstrap.js\"></script>\n");
      out.write("    <script type=\"text/javascript\" src=\"/resources/js/bootstrap.min.js\"></script>\n");
      out.write("    <script type=\"text/javascript\" src=\"/resources/js/home.js\"></script>\n");
      out.write("</head>\n");
      out.write("\n");
      out.write("<body class=\"allBackground\">\n");
      out.write("<div class=\"body\">\n");
      out.write("    <div class=\"header\">\n");
      out.write("        <div class=\"head\">\n");
      out.write("            <div class=\"miniLogo\"><img src=\"/resources/img/zergIcon.png\" CLASS=\"img-circle\"></div>\n");
      out.write("            <div class=\"centerText\"><h1>&nbspVaboo</h1></div>\n");
      out.write("        </div>\n");
      out.write("        <div class=\"clientInfo\">\n");
      out.write("            <span id=\"client\">用户:<span id=\"currentUserName\"></span></span><br>\n");
      out.write("            <a href=\"/login\">退出</a>\n");
      out.write("        </div>\n");
      out.write("    </div>\n");
      out.write("    <br>\n");
      out.write("    <hr>\n");
      out.write("    <div class=\"default\"><h1>留下你的足迹</h1>\n");
      out.write("        <div class=\"navigator\" id=\"navigator\">\n");
      out.write("            <div divName=\"All\">大家的</div>\n");
      out.write("            <div divName=\"My\">我自己的</div>\n");
      out.write("        </div>\n");
      out.write("        <div id=\"weiboContent\" class=\"weiboContent\"></div>\n");
      out.write("        <hr>\n");
      out.write("\n");
      out.write("        ");
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "modal/deleteModal.jsp", out, false);
      out.write("\n");
      out.write("        ");
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "modal/editModal.jsp", out, false);
      out.write("\n");
      out.write("\n");
      out.write("        <div id=\"editContent\" class=\"editContent\">\n");
      out.write("            <div class=\"leftArea\">\n");
      out.write("                <textarea type=\"text\" id=\"weibo\" Value=\"Say something?\" class=\"weibo\"></textarea>\n");
      out.write("            </div>\n");
      out.write("            <div class=\"rightArea\">\n");
      out.write("                <button id=\"confirm\" class=\"btn\">提交</button>\n");
      out.write("            </div>\n");
      out.write("        </div>\n");
      out.write("\n");
      out.write("        <form action=\"/submitContent\" class=\"hiddenForm\" method=\"post\">\n");
      out.write("            <input type=\"text\" id=\"newContent\" name=\"newContent\">\n");
      out.write("            <input type=\"submit\" id=\"contentSubmit\">\n");
      out.write("        </form>\n");
      out.write("\n");
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
