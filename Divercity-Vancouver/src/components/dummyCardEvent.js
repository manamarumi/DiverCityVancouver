 <Card className="w-full">
            <div className="flex">
              <CardHeader>
                <img
                  alt="Canada Day"
                  className="w-full"
                  height="200"
                  src={canadaday}
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width="300"
                />
              </CardHeader>
              <CardContent>
                <h2 className="text-xl font-semibold mb-2">
                  Canada day, July 1.
                </h2>
                <p className="text-gray-600 mb-4">
                  The Canada Day event returned with in-person concerts and
                  celebrations in 2022. However, the event was different from
                  what it was before the pandemic. There were no fireworks that
                  year and there weren't any either in 2023 as Vancouver's
                  annual July 1st pyrotechnic show has now been permanently
                  cancelled.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <ClockIcon className="h-5 w-5 text-gray-500" />
                    <span>11:00 AM - 1:00 PM, July 1st, 2024</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <LocateIcon className="h-5 w-5 text-gray-500" />
                    <span>Georgia & Broughton, 1234 Georgia St</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CurrencyIcon className="h-5 w-5 text-gray-500" />
                    <span>Free</span>
                  </div>
                  <Button
                    className="bg-blue-500 hover:bg-blue-600 text-white"
                    onClick={exploreEvent}
                  >
                    Explore
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card> 