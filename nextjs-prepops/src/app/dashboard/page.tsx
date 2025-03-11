import AppLayout from "@/components/layout/AppLayout";

export default function Page() {
  return (
    <AppLayout>
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="flex flex-col gap-4">
          <h3 className="border-b-2 pb-1">Recent Activities</h3>
          <div className="grid auto-rows-min gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className="h-[180px] rounded-xl bg-muted/50 md:h-[250px] lg:h-[240px]"
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="border-b-2 pb-1">Trending</h3>
          <div className="grid auto-rows-min gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className="h-[180px] rounded-xl bg-muted/50 md:h-[250px] lg:h-[240px]"
              />
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
