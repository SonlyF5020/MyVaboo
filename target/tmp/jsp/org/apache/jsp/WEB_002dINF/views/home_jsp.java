package org.apache.jsp.WEB_002dINF.views;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class home_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final JspFactory _jspxFactory = JspFactory.getDefaultFactory();

  private static java.util.List<String> _jspx_dependants;

  private org.apache.jasper.runtime.TagHandlerPool _jspx_tagPool_c_out_value_nobody;

  private org.glassfish.jsp.api.ResourceInjector _jspx_resourceInjector;

  public java.util.List<String> getDependants() {
    return _jspx_dependants;
  }

  public void _jspInit() {
    _jspx_tagPool_c_out_value_nobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
  }

  public void _jspDestroy() {
    _jspx_tagPool_c_out_value_nobody.release();
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
      out.write("    <script type=\"text/javascript\" src=\"/resources/js/bootstrap.js\"></script>\n");
      out.write("    <script type=\"text/javascript\" src=\"/resources/js/bootstrap.min.js\"></script>\n");
      out.write("    <script>\n");
      out.write("        var i = 0;\n");
      out.write("        var j = 0;\n");
      out.write("        var deleteContent = \"\";\n");
      out.write("        $(document).ready(function () {\n");
      out.write("            $('#confirm').bind(\"click\", function () {\n");
      out.write("                var year = new Date().getYear().toString().substring(1, 3);\n");
      out.write("                var month = (new Date().getMonth() + 1).toString();\n");
      out.write("                var date = new Date().getDate().toString();\n");
      out.write("                var name=$('#client').html();\n");
      out.write("                var dateString = \"<hr>\" + \"---20\" + year + \"年\" + month + \"月\" + date + \"日\"+\"(\"+name+\")\";\n");
      out.write("                var deleteButton = $(document.createElement('div')).addClass('deleteButton');\n");
      out.write("                var chart = $(document.createElement('div')).attr('id', i++).attr('class', 'oneContent').html($('#weibo').val() + dateString).append(deleteButton);\n");
      out.write("                $('#weiboContent').prepend(chart);\n");
      out.write("                $('#weibo').val(\"\");\n");
      out.write("            });\n");
      out.write("\n");
      out.write("\n");
      out.write("            $('.oneContent').live('mouseover', function () {\n");
      out.write("                $(this).addClass('mouseOver');\n");
      out.write("                $('.deleteButton', this).show();\n");
      out.write("            });\n");
      out.write("\n");
      out.write("            $('.oneContent').live('mouseout', function () {\n");
      out.write("                $('.oneContent').removeClass('mouseOver');\n");
      out.write("                $('.deleteButton').hide();\n");
      out.write("            });\n");
      out.write("\n");
      out.write("            $('.deleteButton').live('click', function () {\n");
      out.write("                $('#myModal').modal('show');\n");
      out.write("                deleteContent = $(this).parent().attr(\"id\");\n");
      out.write("            });\n");
      out.write("\n");
      out.write("            $('#sureButton').live('click', function () {\n");
      out.write("                $('#' + deleteContent).hide();\n");
      out.write("                $('#myModal').modal('hide');\n");
      out.write("            });\n");
      out.write("\n");
      out.write("        });\n");
      out.write("    </script>\n");
      out.write("\n");
      out.write("</head>\n");
      out.write("\n");
      out.write("<body class=\"basicBody\">\n");
      out.write("<div class=\"body\">\n");
      out.write("    <div class=\"header\">\n");
      out.write("        <div class=\"head\">\n");
      out.write("            <div class=\"miniLogo\"><img src=\"/resources/img/zergIcon.png\"></div>\n");
      out.write("            <div class=\"centerText\"><h1>&nbspVaboo</h1></div>\n");
      out.write("        </div>\n");
      out.write("        <div class=\"clientInfo\">\n");
      out.write("            <span id=\"client\">用户:");
      if (_jspx_meth_c_out_0(_jspx_page_context))
        return;
      out.write("</span><br>\n");
      out.write("            <a href=\"/\">退出</a>\n");
      out.write("        </div>\n");
      out.write("    </div>\n");
      out.write("    <br>\n");
      out.write("    <hr>\n");
      out.write("    <div class=\"default\"><h1>欢迎使用Vaboo,留下你的足迹</h1>\n");
      out.write("\n");
      out.write("        <div id=\"weiboContent\" class=\"weiboContent\"></div>\n");
      out.write("        <hr>\n");
      out.write("\n");
      out.write("        <div id=\"editContent\" class=\"editContent\">\n");
      out.write("\n");
      out.write("            <div class=\"leftArea\">\n");
      out.write("                <textarea type=\"text\" id=\"weibo\" Value=\"Say something?\" class=\"weibo\"></textarea>\n");
      out.write("            </div>\n");
      out.write("\n");
      out.write("            <div class=\"rightArea\">\n");
      out.write("\n");
      out.write("                <div id=\"myModal\" class=\"modal hide fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\n");
      out.write("                     aria-hidden=\"true\">\n");
      out.write("\n");
      out.write("                    <div class=\"modal-header\">\n");
      out.write("                        <h3 id=\"myModalLabel\">Are you sure you want to delete this tip?</h3>\n");
      out.write("                    </div>\n");
      out.write("\n");
      out.write("                    <div class=\"modal-footer\">\n");
      out.write("                        <button class=\"redButton btn\" data-dismiss=\"modal\" aria-hidden=\"true\">NO!</button>\n");
      out.write("                        <button id=\"sureButton\" class=\"btn btn-primary\">Sure</button>\n");
      out.write("                    </div>\n");
      out.write("                </div>\n");
      out.write("\n");
      out.write("                <button id=\"confirm\" class=\"btn\">confirm</button>\n");
      out.write("            </div>\n");
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

  private boolean _jspx_meth_c_out_0(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  c:out
    org.apache.taglibs.standard.tag.rt.core.OutTag _jspx_th_c_out_0 = (org.apache.taglibs.standard.tag.rt.core.OutTag) _jspx_tagPool_c_out_value_nobody.get(org.apache.taglibs.standard.tag.rt.core.OutTag.class);
    _jspx_th_c_out_0.setPageContext(_jspx_page_context);
    _jspx_th_c_out_0.setParent(null);
    _jspx_th_c_out_0.setValue((java.lang.Object) org.apache.jasper.runtime.PageContextImpl.evaluateExpression("${name}", java.lang.Object.class, (PageContext)_jspx_page_context, null));
    int _jspx_eval_c_out_0 = _jspx_th_c_out_0.doStartTag();
    if (_jspx_th_c_out_0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_tagPool_c_out_value_nobody.reuse(_jspx_th_c_out_0);
      return true;
    }
    _jspx_tagPool_c_out_value_nobody.reuse(_jspx_th_c_out_0);
    return false;
  }
}
