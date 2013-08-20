package org.apache.jsp.WEB_002dINF.views.newClient;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class newClient_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final JspFactory _jspxFactory = JspFactory.getDefaultFactory();

  private static java.util.List<String> _jspx_dependants;

  private org.apache.jasper.runtime.TagHandlerPool _jspx_tagPool_c_import_url_nobody;

  private org.glassfish.jsp.api.ResourceInjector _jspx_resourceInjector;

  public java.util.List<String> getDependants() {
    return _jspx_dependants;
  }

  public void _jspInit() {
    _jspx_tagPool_c_import_url_nobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
  }

  public void _jspDestroy() {
    _jspx_tagPool_c_import_url_nobody.release();
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
      out.write("    <script type=\"text/javascript\" src=\"/resources/js/bootstrap.js\"></script>\n");
      out.write("\n");
      out.write("    <script>\n");
      out.write("        $(document).ready(function(){\n");
      out.write("            $('#confirmShow').live(\"click\",function(){\n");
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
      out.write("        <form>\n");
      out.write("            姓名：<input type=\"text\" id=\"inputName\"><br>\n");
      out.write("            密码：<input type=\"password\" id=\"password1\"><br>\n");
      out.write("            密码：<input type=\"password\" id=\"password2\"><br>\n");
      out.write("            邮箱：<input type=\"text\" id=\"emailAddress\">\n");
      out.write("            <span class=\"warning\"><br>您两次输入的密码不一致！</span><br>\n");
      out.write("            <input type=\"button\" class=\"btn\" id=\"confirmShow\" value=\"确定\"><a href=\"/\" class=\"btn\">返回</a>\n");
      out.write("        </form>\n");
      out.write("\n");
      out.write("        <form action=\"/clientCreate\" method=\"get\" class=\"hiddenForm\">\n");
      out.write("            <input type=\"text\" name=\"name\">\n");
      out.write("            <input type=\"password\" name=\"password\">\n");
      out.write("            <input type=\"text\" name=\"faceUrl\">\n");
      out.write("            <input type=\"text\" name=\"emailAddress\">\n");
      out.write("            <input type=\"submit\" id=\"confirmHidden\">\n");
      out.write("        </form>\n");
      out.write("\n");
      out.write("    </div>\n");
      out.write("    <div class=\"bigLogo\">\n");
      out.write("        <img src=\"/resources/img/zergIcon.png\">\n");
      out.write("        <a class=\"btn\">选择头像</a>\n");
      out.write("    </div>\n");
      out.write("    ");
      if (_jspx_meth_c_import_0(_jspx_page_context))
        return;
      out.write("\n");
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

  private boolean _jspx_meth_c_import_0(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  c:import
    org.apache.taglibs.standard.tag.rt.core.ImportTag _jspx_th_c_import_0 = (org.apache.taglibs.standard.tag.rt.core.ImportTag) _jspx_tagPool_c_import_url_nobody.get(org.apache.taglibs.standard.tag.rt.core.ImportTag.class);
    _jspx_th_c_import_0.setPageContext(_jspx_page_context);
    _jspx_th_c_import_0.setParent(null);
    _jspx_th_c_import_0.setUrl("/WEB-INF/views/newClient/facesLightbox.jsp");
    int[] _jspx_push_body_count_c_import_0 = new int[] { 0 };
    try {
      int _jspx_eval_c_import_0 = _jspx_th_c_import_0.doStartTag();
      if (_jspx_th_c_import_0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
        return true;
      }
    } catch (Throwable _jspx_exception) {
      while (_jspx_push_body_count_c_import_0[0]-- > 0)
        out = _jspx_page_context.popBody();
      _jspx_th_c_import_0.doCatch(_jspx_exception);
    } finally {
      _jspx_th_c_import_0.doFinally();
      _jspx_tagPool_c_import_url_nobody.reuse(_jspx_th_c_import_0);
    }
    return false;
  }
}
