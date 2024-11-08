from rest_framework import permissions

class IsAdminOrReadOnly(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True
        
        if request.method in ['POST', 'PUT', 'PATCH', 'DELETE'] and request.user.role == 'admin':
            return True

        return False

class IsStaffOrReadOnly(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True
        
        if request.method in ['POST', 'PUT', 'PATCH', 'DELETE'] and request.user.role in ['admin', 'manager']:
            return True

        return False

class FarmerStackPermission(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.user and request.user.role in ['admin', 'manager']:
            return True
        
        if request.method in ['GET']:
            obj = view.get_object()
            
            if obj.user == request.user:
                return True

        return False