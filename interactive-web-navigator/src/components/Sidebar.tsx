import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  hasSubMenu?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

const NavItem = ({ to, icon, label, isActive, hasSubMenu, onClick, disabled }: NavItemProps) => {
  if (disabled) {
    return (
      <div
        className={cn(
          "flex items-center gap-2 px-4 py-3 text-sm transition-colors text-gray-400 cursor-not-allowed"
        )}
      >
        <div className="w-5 h-5 flex items-center justify-center">{icon}</div>
        <span className="flex-1">{label}</span>
        {hasSubMenu && <ChevronRight className="h-4 w-4" />}
      </div>
    );
  }

  return (
    <Link
      to={to}
      className={cn(
        "flex items-center gap-2 px-4 py-3 text-sm transition-colors",
        isActive ? "bg-blue-600 text-white" : "hover:bg-gray-100"
      )}
      onClick={onClick}
    >
      <div className="w-5 h-5 flex items-center justify-center">{icon}</div>
      <span className="flex-1">{label}</span>
      {hasSubMenu && <ChevronRight className="h-4 w-4" />}
    </Link>
  );
};

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div
      className={cn(
        "h-screen bg-white border-r border-gray-200 transition-all duration-300 flex flex-col",
        isCollapsed ? "w-14" : "w-64"
      )}
    >
      <div className="p-4 border-b border-gray-200">
        {!isCollapsed ? (
          <div className="flex items-center">
            <img src="/lovable-uploads/2818f1d0-82c6-432c-bb5c-e4e1422f27fd.png" alt="GVK Logo" className="h-8" />
          </div>
        ) : (
          <div className="flex justify-center">
            <img src="/lovable-uploads/2818f1d0-82c6-432c-bb5c-e4e1422f27fd.png" alt="GVK Logo" className="h-8" />
          </div>
        )}
      </div>

      {!isCollapsed && (
        <div className="flex items-center gap-3 p-4 border-b border-gray-200">
          <div className="bg-gray-200 rounded-full h-8 w-8 flex items-center justify-center text-gray-600">
            LS
          </div>
          <div className="flex-1 truncate">
            <p className="text-sm font-medium truncate">Hello LH - Saurao dalvi</p>
            <p className="text-xs text-gray-500 truncate">#10541 - GVK EMERGENCY</p>
          </div>
          <button onClick={toggleSidebar}>
            <ChevronLeft className="h-5 w-5" />
          </button>
        </div>
      )}

      {isCollapsed && (
        <div className="p-2 flex justify-center border-b border-gray-200">
          <button onClick={toggleSidebar} className="p-1 rounded-md hover:bg-gray-100">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}

      <div className={cn("p-2 border-b border-gray-200", isCollapsed && "flex justify-center")}>
        <div className={cn("relative", isCollapsed ? "w-8" : "w-full")}>
          {!isCollapsed && (
            <input
              className="w-full px-3 py-1.5 pl-8 text-sm border border-gray-300 rounded-md"
              placeholder="Navigation Search"
            />
          )}
          <Search className={cn("h-4 w-4 text-gray-400", !isCollapsed ? "absolute top-2 left-2" : "")} />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <NavItem
          to="/operation"
          icon={<span className="text-lg">⚙️</span>}
          label="Operation"
          isActive={isActive("/operation")}
          disabled={true}
        />
        <NavItem
          to="/dashboard"
          icon={<span className="text-lg">📊</span>}
          label="Operations Dashboard"
          isActive={isActive("/dashboard")}
          disabled={true}
        />
        <NavItem
          to="/waiting-list"
          icon={<span className="text-lg">📋</span>}
          label="Waiting List"
          isActive={isActive("/waiting-list")}
          hasSubMenu
          disabled={true}
        />
        <NavItem
          to="/dashboard"
          icon={<span className="text-lg">🗃️</span>}
          label="Archives"
          isActive={isActive("/archives")}
        />
        <NavItem
          to="/test-status"
          icon={<span className="text-lg">📝</span>}
          label="Operation / Test Status"
          isActive={isActive("/test-status")}
          disabled={true}
        />
        <NavItem
          to="/report-prints"
          icon={<span className="text-lg">🖨️</span>}
          label="Report Prints"
          isActive={isActive("/report-prints")}
          hasSubMenu
          disabled={true}
        />
        <NavItem
          to="/inventory"
          icon={<span className="text-lg">📦</span>}
          label="Inventory Management"
          isActive={isActive("/inventory")}
          disabled={true}
        />
        <NavItem
          to="/analytics"
          icon={<span className="text-lg">📈</span>}
          label="TAT Analytics"
          isActive={isActive("/analytics")}
          disabled={true}
        />
        <NavItem
          to="/quality"
          icon={<span className="text-lg">✅</span>}
          label="Quality Control"
          isActive={isActive("/quality")}
          hasSubMenu
          disabled={true}
        />
        <NavItem
          to="/drug-master"
          icon={<span className="text-lg">💊</span>}
          label="Drug Master / Panel Master"
          isActive={isActive("/drug-master")}
          hasSubMenu
          disabled={true}
        />
        <NavItem
          to="/instrument"
          icon={<span className="text-lg">🔬</span>}
          label="Instrument Management"
          isActive={isActive("/instrument")}
          disabled={true}
        />
        <NavItem
          to="/advanced-search"
          icon={<span className="text-lg">🔍</span>}
          label="Advanced Search"
          isActive={isActive("/advanced-search")}
          disabled={true}
        />
      </div>

      <div className="p-3 border-t border-gray-200">
        {!isCollapsed && (
          <>
            <p className="text-xs font-medium text-gray-500 mb-2">MORE INFO</p>
            <NavItem
              to="/updates"
              icon={<span className="text-lg">🔔</span>}
              label="Updates"
              isActive={isActive("/updates")}
              disabled={true}
            />
            <NavItem
              to="/tutorial"
              icon={<span className="text-lg">🎬</span>}
              label="Video Tutorial"
              isActive={isActive("/tutorial")}
              disabled={true}
            />
            <NavItem
              to="/support"
              icon={<span className="text-lg">🆘</span>}
              label="Support"
              isActive={isActive("/support")}
              disabled={true}
            />
            <NavItem
              to="/language"
              icon={<span className="text-lg">🌐</span>}
              label="English"
              isActive={false}
              hasSubMenu
              disabled={true}
            />
          </>
        )}
        {isCollapsed && (
          <div className="flex flex-col items-center gap-3 py-2">
            <span className="text-lg">🔔</span>
            <span className="text-lg">🎬</span>
            <span className="text-lg">🆘</span>
            <span className="text-lg">🌐</span>
          </div>
        )}
      </div>

      {!isCollapsed && (
        <button
          onClick={toggleSidebar}
          className="flex items-center gap-2 p-3 border-t border-gray-200 hover:bg-gray-100"
        >
          <ChevronLeft className="h-5 w-5" />
          <span className="text-sm">Collapse</span>
        </button>
      )}
    </div>
  );
}
