ActiveAdmin.register Map do

  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # Uncomment all parameters which should be permitted for assignment
  #
  # permit_params :name
  #
  # or
  #
  # permit_params do
  #   permitted = [:name]
  #   permitted << :other if params[:action] == 'create' && current_user.admin?
  #   permitted
  # end

  form do |f|
    f.inputs do
      f.input :name
      if f.object.image.attached?
        f.input :image, as: :file, hint: image_tag(url_for(f.object.image))
      else
        f.input :image, as: :file
      end
    end
    f.actions
  end

  show do
    attributes_table do
      row :name
      row :image do |ad|
        image_tag url_for(ad.image)
      end
    end
    active_admin_comments
  end

  permit_params :name, :image
end
