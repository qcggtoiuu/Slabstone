import React, { useState } from "react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Filter, Palette, Grid2X2, X, ChevronDown } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { ScrollArea } from "./ui/scroll-area";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

interface FilterOption {
  id: string;
  label: string;
  value: string;
}

interface FilterBarProps {
  onFilterChange?: (type: string, value: string) => void;
  selectedFilters?: Record<string, string>;
  colorOptions?: FilterOption[];
  patternOptions?: FilterOption[];
  applicationOptions?: FilterOption[];
}

const FilterBar = ({
  onFilterChange = () => {},
  selectedFilters = {},
  colorOptions = [],
  patternOptions = [],
  applicationOptions = [],
}: FilterBarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-white border-b sticky top-0 z-10">
      {/* Mobile View */}
      <div className="lg:hidden p-4">
        <div className="flex items-center justify-between gap-4">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Bộ lọc
                <ChevronDown className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="w-full p-0">
              <SheetHeader className="p-4 border-b">
                <SheetTitle>Bộ lọc sản phẩm</SheetTitle>
              </SheetHeader>
              <ScrollArea className="h-[60vh]">
                <div className="p-4 space-y-6">
                  {/* Color Filter */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Palette className="h-4 w-4" />
                      <span className="text-sm font-medium">Màu sắc</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {colorOptions.map((option) => (
                        <Button
                          key={option.id}
                          variant={
                            selectedFilters["color"] === option.value
                              ? "default"
                              : "outline"
                          }
                          size="sm"
                          onClick={() => onFilterChange("color", option.value)}
                          className="justify-start"
                        >
                          {option.label}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  {/* Pattern Filter */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Filter className="h-4 w-4" />
                      <span className="text-sm font-medium">Bề mặt</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {patternOptions.map((option) => (
                        <Button
                          key={option.id}
                          variant={
                            selectedFilters["pattern"] === option.value
                              ? "default"
                              : "outline"
                          }
                          size="sm"
                          onClick={() =>
                            onFilterChange("pattern", option.value)
                          }
                          className="justify-start"
                        >
                          {option.label}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  {/* Application Filter */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Grid2X2 className="h-4 w-4" />
                      <span className="text-sm font-medium">Ứng dụng</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {applicationOptions.map((option) => (
                        <Button
                          key={option.id}
                          variant={
                            selectedFilters["application"] === option.value
                              ? "default"
                              : "outline"
                          }
                          size="sm"
                          onClick={() =>
                            onFilterChange("application", option.value)
                          }
                          className="justify-start"
                        >
                          {option.label}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollArea>
            </SheetContent>
          </Sheet>

          {Object.keys(selectedFilters).length > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                Object.keys(selectedFilters).forEach((key) => {
                  onFilterChange(key, "");
                });
              }}
              className="flex items-center gap-2"
            >
              <X className="h-4 w-4" />
              Xóa bộ lọc
            </Button>
          )}
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden lg:block p-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-8">
              {/* Color Filter */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Palette className="h-4 w-4" />
                  <span className="font-medium">Màu sắc</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {colorOptions.slice(0, 3).map((option) => (
                    <Button
                      key={option.id}
                      variant={
                        selectedFilters["color"] === option.value
                          ? "default"
                          : "outline"
                      }
                      size="sm"
                      onClick={() => onFilterChange("color", option.value)}
                    >
                      {option.label}
                    </Button>
                  ))}
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="flex items-center gap-1 text-muted-foreground hover:text-foreground"
                      >
                        Xem tất cả
                        <ChevronDown className="h-3 w-3" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[280px] p-3">
                      <div className="grid grid-cols-2 gap-2">
                        {colorOptions.map((option) => (
                          <Button
                            key={option.id}
                            variant={
                              selectedFilters["color"] === option.value
                                ? "default"
                                : "outline"
                            }
                            size="sm"
                            onClick={() =>
                              onFilterChange("color", option.value)
                            }
                            className="justify-start"
                          >
                            {option.label}
                          </Button>
                        ))}
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              {/* Pattern Filter */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  <span className="font-medium">Bề mặt</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {patternOptions.slice(0, 3).map((option) => (
                    <Button
                      key={option.id}
                      variant={
                        selectedFilters["pattern"] === option.value
                          ? "default"
                          : "outline"
                      }
                      size="sm"
                      onClick={() => onFilterChange("pattern", option.value)}
                    >
                      {option.label}
                    </Button>
                  ))}
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="flex items-center gap-1 text-muted-foreground hover:text-foreground"
                      >
                        Xem tất cả
                        <ChevronDown className="h-3 w-3" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[280px] p-3">
                      <div className="grid grid-cols-2 gap-2">
                        {patternOptions.map((option) => (
                          <Button
                            key={option.id}
                            variant={
                              selectedFilters["pattern"] === option.value
                                ? "default"
                                : "outline"
                            }
                            size="sm"
                            onClick={() =>
                              onFilterChange("pattern", option.value)
                            }
                            className="justify-start"
                          >
                            {option.label}
                          </Button>
                        ))}
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              {/* Application Filter */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Grid2X2 className="h-4 w-4" />
                  <span className="font-medium">Ứng dụng</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {applicationOptions.slice(0, 3).map((option) => (
                    <Button
                      key={option.id}
                      variant={
                        selectedFilters["application"] === option.value
                          ? "default"
                          : "outline"
                      }
                      size="sm"
                      onClick={() =>
                        onFilterChange("application", option.value)
                      }
                    >
                      {option.label}
                    </Button>
                  ))}
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="flex items-center gap-1 text-muted-foreground hover:text-foreground"
                      >
                        Xem tất cả
                        <ChevronDown className="h-3 w-3" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[280px] p-3">
                      <div className="grid grid-cols-2 gap-2">
                        {applicationOptions.map((option) => (
                          <Button
                            key={option.id}
                            variant={
                              selectedFilters["application"] === option.value
                                ? "default"
                                : "outline"
                            }
                            size="sm"
                            onClick={() =>
                              onFilterChange("application", option.value)
                            }
                            className="justify-start"
                          >
                            {option.label}
                          </Button>
                        ))}
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </div>

            {Object.keys(selectedFilters).length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  Object.keys(selectedFilters).forEach((key) => {
                    onFilterChange(key, "");
                  });
                }}
                className="flex items-center gap-2"
              >
                <X className="h-4 w-4" />
                Xóa bộ lọc
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
