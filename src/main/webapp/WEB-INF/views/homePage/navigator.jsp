<%@ page session="true" contentType="text/html; charset=UTF-8" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">


<div class="navigator" id="navigator">
    <div divName="All">大家的</div>
    <div divName="My">我自己的</div>
</div>
<form class="navbar-form navbar-left searchCustomise" role="search" action="/search">
    <div class="form-group">
        <input type="text" class="form-control search-input" placeholder="Search" name="content">
    </div>
    <button type="submit" class="btn btn-default" ><img src="/resources/img/searchIcon.png"></button>
</form>