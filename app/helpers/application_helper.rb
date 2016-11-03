module ApplicationHelper
  def image_url(source)
    debugger
    "#{root_url}#{image_path(source)}"
  end
end
